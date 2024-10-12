# Space


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_session_id** | **str** | Unique identifier for the current lifecycle of the space. Only set when the space is &#x60;active&#x60; and is set to a new value each time the space transitions from &#x60;idle&#x60; to &#x60;active&#x60;. This value is useful for logging and debugging issues. Max 255 characters. | [optional] 
**broadcasts** | [**List[Broadcast]**](Broadcast.md) | An array of broadcast destinations. | [optional] 
**created_at** | **str** | Time the space was created, defined as a Unix timestamp (seconds since epoch). | 
**id** | **str** | Unique identifier for the space. Max 255 characters. | 
**passthrough** | **str** | Arbitrary user-supplied metadata that will be included in the space details and related webhooks. Max: 255 characters. | [optional] 
**status** | [**SpaceStatus**](SpaceStatus.md) |  | 
**type** | [**SpaceType**](SpaceType.md) |  | [default to SpaceType.SERVER]

## Example

```python
from openapi_client.models.space import Space

# TODO update the JSON string below
json = "{}"
# create an instance of Space from a JSON string
space_instance = Space.from_json(json)
# print the JSON string representation of the object
print(Space.to_json())

# convert the object into a dict
space_dict = space_instance.to_dict()
# create an instance of Space from a dict
space_from_dict = Space.from_dict(space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


