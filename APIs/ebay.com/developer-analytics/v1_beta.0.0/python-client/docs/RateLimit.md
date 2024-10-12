# RateLimit

This complex types defines the resource (such as an API method) for which the rate-limit data is returned.  <br><br>A method is included in an API, and an API is part of an API context for the API version specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_context** | **str** | The context of the API for which rate-limit data is returned. For example &lt;code&gt;buy&lt;/code&gt;, &lt;code&gt;sell&lt;/code&gt;, &lt;code&gt;commerce&lt;/code&gt;, &lt;code&gt;developer&lt;/code&gt; or &lt;code&gt;tradingapi&lt;/code&gt;. | [optional] 
**api_name** | **str** | The name of the API for which rate-limit data is returned. For example &lt;code&gt;browse&lt;/code&gt; for the Buy API, &lt;code&gt;inventory&lt;/code&gt; for the Sell API, &lt;code&gt;taxonomy&lt;/code&gt; for the Commerce API, or &lt;code&gt;tradingapi&lt;/code&gt; for Trading API. | [optional] 
**api_version** | **str** | The version of the API for which rate-limit data is returned. For example &lt;code&gt;v1&lt;/code&gt; or &lt;code&gt;v2&lt;/code&gt;. | [optional] 
**resources** | [**List[Resource]**](Resource.md) | A list of the methods for which rate-limit data is returned. For example &lt;code&gt;item&lt;/code&gt; for the Feed API, &lt;code&gt;getOrder&lt;/code&gt; for the Fulfillment API, &lt;code&gt;getProduct&lt;/code&gt; for the Catalog API, &lt;code&gt;AddItems&lt;/code&gt; for the Trading API. | [optional] 

## Example

```python
from openapi_client.models.rate_limit import RateLimit

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimit from a JSON string
rate_limit_instance = RateLimit.from_json(json)
# print the JSON string representation of the object
print(RateLimit.to_json())

# convert the object into a dict
rate_limit_dict = rate_limit_instance.to_dict()
# create an instance of RateLimit from a dict
rate_limit_from_dict = RateLimit.from_dict(rate_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


