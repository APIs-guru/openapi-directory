# PostDriversRequestAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**street_and_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_drivers_request_address import PostDriversRequestAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PostDriversRequestAddress from a JSON string
post_drivers_request_address_instance = PostDriversRequestAddress.from_json(json)
# print the JSON string representation of the object
print(PostDriversRequestAddress.to_json())

# convert the object into a dict
post_drivers_request_address_dict = post_drivers_request_address_instance.to_dict()
# create an instance of PostDriversRequestAddress from a dict
post_drivers_request_address_from_dict = PostDriversRequestAddress.from_dict(post_drivers_request_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


