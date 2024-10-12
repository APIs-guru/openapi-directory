# PostConnectorsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chargestation** | **str** |  | [optional] 
**format** | **str** |  | [optional] 
**power** | **int** |  | [optional] 
**power_type** | **str** |  | [optional] 
**rate** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_connectors_request import PostConnectorsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostConnectorsRequest from a JSON string
post_connectors_request_instance = PostConnectorsRequest.from_json(json)
# print the JSON string representation of the object
print(PostConnectorsRequest.to_json())

# convert the object into a dict
post_connectors_request_dict = post_connectors_request_instance.to_dict()
# create an instance of PostConnectorsRequest from a dict
post_connectors_request_from_dict = PostConnectorsRequest.from_dict(post_connectors_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


