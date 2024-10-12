# IntuneStoreResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_category** | [**StoresList200ResponseInnerIntuneDetailsAppCategory**](StoresList200ResponseInnerIntuneDetailsAppCategory.md) |  | [optional] 
**target_audience** | [**StoresList200ResponseInnerIntuneDetailsTargetAudience**](StoresList200ResponseInnerIntuneDetailsTargetAudience.md) |  | [optional] 

## Example

```python
from openapi_client.models.intune_store_response import IntuneStoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneStoreResponse from a JSON string
intune_store_response_instance = IntuneStoreResponse.from_json(json)
# print the JSON string representation of the object
print(IntuneStoreResponse.to_json())

# convert the object into a dict
intune_store_response_dict = intune_store_response_instance.to_dict()
# create an instance of IntuneStoreResponse from a dict
intune_store_response_from_dict = IntuneStoreResponse.from_dict(intune_store_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


