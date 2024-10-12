# C++ Qt API client

# 

Portfolio Optimizer

- API version: 1.0.9
- Generator version: 7.9.0

Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).

# API General Information

  Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).

Portfolio Optimizer is also as secured as a Web API could be: 
* [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS)
* No usage of cookies
* No usage of personal data  

## API Headers 
The following HTTP header(s) are required when calling Portfolio Optimizer endpoints:
* `Content-type: application/json`  
  This header specifies that the data provided in input to the endpoint is in JSON format

The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints:
* `Content-Encoding: gzip`  
  This header indicates that the data provided in input to the endpoint is compressed with gzip.
* `X-API-Key: <private API key>`  
  This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)

## API Key
Portfolio Optimizer is free to use, but not free to run.

In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.

This participation takes the form of coffee(s), with one coffee = one month of usage.

<p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>


> **Notes:** 
> * Please make sure not to expose your API key publicly!

## API Limits 

Portfolio Optimizer comes with *fairly reasonable* API limits.

For anonymous users:  
* The API requests are restricted to a subset of all the available endpoints and/or endpoints features  
* The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected 
* The API requests are limited to 1 second of execution time
* The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors

For authenticated users with an [API key](#overview--api-key):  
* The API requests have access to all the available endpoints and endpoints features
* The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued
* The API requests are limited to 2.5 seconds of execution time
* The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors

> **Notes:** 
> * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.
> * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:  
>   * `x-ratelimit-limit-second`, the limit on the number of API requests per second
>   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second    
>   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute
>   * ...

## API Regions
Portfolio Optimizer servers are located in Western Europe.

> **Notes:** 
> * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. 

## API Response Codes       

Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.

| HTTP Code | Description | Notes |
| --------- | ----------- | ----- |
| 200 | Request successfully processed | - |
| 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content |
| 401 | Request failed to be processed because of invalid API key | - |
| 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) |
| 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) |
| 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) |
| 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |

## API Status  

Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).

# Support

For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/).


  For more information, please visit [https://portfoliooptimizer.io/](https://portfoliooptimizer.io/)

*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*


## Requirements

Building the API client library requires:

1. CMake 3.2+
2. Qt
3. C++ Compiler

## Getting Started

example.h:
```c++

#include <iostream>
#include "../client/OAIAssetsAnalysisApi.h"

using namespace test_namespace;

class Example : public QObject {
    Q_OBJECT
    OAI_assets_analysis_absorption_ratio_post_request create();
public Q_SLOTS:
   void exampleFunction1();
};

```

example.cpp:
```c++

#include "../client/OAIAssetsAnalysisApi.h"
#include "example.h"
#include <QTimer>
#include <QEventLoop>

OAI_assets_analysis_absorption_ratio_post_request Example::create(){
    OAI_assets_analysis_absorption_ratio_post_request obj;
 return obj;
}

void Example::exampleFunction1(){
     OAIAssetsAnalysisApi apiInstance;
     
      // Configure API key authorization: ApiKeyAuth
      apiInstance.setApiKey("YOUR API KEY NAME","YOUR API KEY");

      QEventLoop loop;
      connect(&apiInstance, &OAIAssetsAnalysisApi::assetsAnalysisAbsorptionRatioPostSignal, [&]() {
          loop.quit();
      });
      connect(&apiInstance, &OAIAssetsAnalysisApi::assetsAnalysisAbsorptionRatioPostSignalE, [&](QNetworkReply::NetworkError, QString error_str) {
          qDebug() << "Error happened while issuing request : " << error_str;
          loop.quit();
      });

      OAI_assets_analysis_absorption_ratio_post_request body = create(); // OAI_assets_analysis_absorption_ratio_post_request | 
      apiInstance.assetsAnalysisAbsorptionRatioPost(body);
      QTimer::singleShot(5000, &loop, &QEventLoop::quit);
      loop.exec();
  }

```

## Documentation for Servers

Parameterized Servers are supported. Define a server in the API for each endpoint with arbitrary numbers of variables:

```yaml
servers:
- url: http://{server}:{port}/{basePath}
  description: Description of the Server
  variables:
    server:
        enum:
          - 'petstore'
          - 'qa-petstore'
          - 'dev-petstore'
        default: 'petstore'
    port:
      enum:
        - '3000'
        - '1000'
      default: '3000'
    basePath:
      default: v1
```
To change the default variable, use this function in each Api:
```c++
int setDefaultServerValue(int serverIndex,const QString &operation, const QString &variable,const QString &val);
```
The parameter "serverIndex" will choose a server from the server list for each endpoint. There is always at least one server with index 0. The Parameter "operation" should be the desired endpoint operationid.
Variable is the name of the variable you wish to change and the value is the new default Value.
The function will return -1 when the variable does not exists, -2 if value is not defined in the variable enum and -3 if the operation is not found.

If your endpoint has multiple server objects in the servers array, you can set the server that will be used with this function:
```c++
void setServerIndex(const QString &operation, int serverIndex);
```
Parameter "operation" should be your operationid. "serverIndex" is the index you want to set as your default server. The function will check if there is a server with your index.
Here is an example of multiple servers in the servers array. The first server will have index 0 and the second will have index 1.
```yaml
servers:
- url: http://{server}:8080/
  description: Description of the Server
  variables:
    server:
        enum:
          - 'petstore'
          - 'qa-petstore'
          - 'dev-petstore'
        default: 'petstore'
- url: https://localhost:8080/v1
```

## Documentation for Authorization

Authentication schemes defined for the API:
### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header


## Author

contact@portfoliooptimizer.io


## License

Apache 2.0 for more information visit [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)