# CreateSpaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadcasts** | [**List[CreateBroadcastRequest]**](CreateBroadcastRequest.md) | An array of broadcast destinations you want to stream the space to. **Note:** By default only a single broadcast destination can be specified. Contact Mux support if you need more. | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata that will be included in the space details and related webhooks. Max: 255 characters. | [optional] 
**type** | [**SpaceType**](SpaceType.md) |  | [optional] [default to SpaceType.SERVER]

## Example

```python
from openapi_client.models.create_space_request import CreateSpaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSpaceRequest from a JSON string
create_space_request_instance = CreateSpaceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSpaceRequest.to_json())

# convert the object into a dict
create_space_request_dict = create_space_request_instance.to_dict()
# create an instance of CreateSpaceRequest from a dict
create_space_request_from_dict = CreateSpaceRequest.from_dict(create_space_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


