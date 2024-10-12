# PostConfigurationsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_configurations_request import PostConfigurationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostConfigurationsRequest from a JSON string
post_configurations_request_instance = PostConfigurationsRequest.from_json(json)
# print the JSON string representation of the object
print(PostConfigurationsRequest.to_json())

# convert the object into a dict
post_configurations_request_dict = post_configurations_request_instance.to_dict()
# create an instance of PostConfigurationsRequest from a dict
post_configurations_request_from_dict = PostConfigurationsRequest.from_dict(post_configurations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


