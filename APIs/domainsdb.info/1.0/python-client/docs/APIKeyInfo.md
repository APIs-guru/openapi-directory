# APIKeyInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_email** | **str** | State | [optional] 
**customer_name** | **str** | State | [optional] 
**expires** | **str** | State | [optional] 
**item_id** | **str** | State | [optional] 
**item_name** | **str** | State | [optional] 
**license** | **str** | State | [optional] 
**license_limit** | **str** | State | [optional] 
**price_id** | **str** | State | [optional] 
**success** | **str** | State | [optional] 

## Example

```python
from openapi_client.models.api_key_info import APIKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of APIKeyInfo from a JSON string
api_key_info_instance = APIKeyInfo.from_json(json)
# print the JSON string representation of the object
print(APIKeyInfo.to_json())

# convert the object into a dict
api_key_info_dict = api_key_info_instance.to_dict()
# create an instance of APIKeyInfo from a dict
api_key_info_from_dict = APIKeyInfo.from_dict(api_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


