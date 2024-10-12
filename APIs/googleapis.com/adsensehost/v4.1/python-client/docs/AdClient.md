# AdClient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arc_opt_in** | **bool** | Whether this ad client is opted in to ARC. | [optional] 
**id** | **str** | Unique identifier of this ad client. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsensehost#adClient. | [optional] [default to 'adsensehost#adClient']
**product_code** | **str** | This ad client&#39;s product code, which corresponds to the PRODUCT_CODE report dimension. | [optional] 
**supports_reporting** | **bool** | Whether this ad client supports being reported on. | [optional] 

## Example

```python
from openapi_client.models.ad_client import AdClient

# TODO update the JSON string below
json = "{}"
# create an instance of AdClient from a JSON string
ad_client_instance = AdClient.from_json(json)
# print the JSON string representation of the object
print(AdClient.to_json())

# convert the object into a dict
ad_client_dict = ad_client_instance.to_dict()
# create an instance of AdClient from a dict
ad_client_from_dict = AdClient.from_dict(ad_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


