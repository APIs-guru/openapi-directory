import sys
from setuptools import setup, find_packages

NAME = "openapi_server"
VERSION = "1.0.0"

# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
    "connexion>=2.0.2",
    "swagger-ui-bundle>=0.0.2",
    "python_dateutil>=2.6.0"
]

setup(
    name=NAME,
    version=VERSION,
    description="Portfolio Optimizer",
    author_email="contact@portfoliooptimizer.io",
    url="",
    keywords=["OpenAPI", "Portfolio Optimizer"],
    install_requires=REQUIRES,
    packages=find_packages(),
    package_data={'': ['openapi/openapi.yaml']},
    include_package_data=True,
    entry_points={
        'console_scripts': ['openapi_server=openapi_server.__main__:main']},
    long_description="""\
    Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (&#x60;POST&#x60;) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * &#x60;Content-type: application/json&#x60;     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * &#x60;Content-Encoding: gzip&#x60;     This header indicates that the data provided in input to the endpoint is compressed with gzip. * &#x60;X-API-Key: &lt;private API key&gt;&#x60;     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee &#x3D; one month of usage.  &lt;p&gt;&lt;a href&#x3D;\&quot;https://www.buymeacoffee.com/portfolioopt\&quot;&gt;&lt;img alt&#x3D;&#39;Buy a Coffee at buymeacoffee.com&#39; src&#x3D;\&quot;https://img.buymeacoffee.com/button-api/?text&#x3D;Buymeacoffee.com&amp;emoji&#x3D;&amp;slug&#x3D;portfolioopt&amp;button_colour&#x3D;000000&amp;font_colour&#x3D;ffffff&amp;font_family&#x3D;Cookie&amp;outline_colour&#x3D;ffffff&amp;coffee_colour&#x3D;FFDD00\&quot;&gt;&lt;/a&gt;&lt;/p&gt;   &gt; **Notes:**  &gt; * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  &gt; **Notes:**  &gt; * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. &gt; * Information on the API rate limits are provided in response messages HTTP headers &#x60;x-ratelimit-*&#x60;:   &gt;   * &#x60;x-ratelimit-limit-second&#x60;, the limit on the number of API requests per second &gt;   * &#x60;x-ratelimit-remaining-second&#x60;, the number of remaining API requests in the current second     &gt;   * &#x60;x-ratelimit-limit-minute&#x60;, the limit on the number of API requests per minute &gt;   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  &gt; **Notes:**  &gt; * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., &#x60;POST&#x60; instead of &#x60;GET&#x60;) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers &#x60;x-ratelimit-*&#x60; contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
    """
)

