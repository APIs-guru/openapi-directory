# EndpointPostPositions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Position**](Position.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_positions import EndpointPostPositions

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostPositions from a JSON string
endpoint_post_positions_instance = EndpointPostPositions.from_json(json)
# print the JSON string representation of the object
print(EndpointPostPositions.to_json())

# convert the object into a dict
endpoint_post_positions_dict = endpoint_post_positions_instance.to_dict()
# create an instance of EndpointPostPositions from a dict
endpoint_post_positions_from_dict = EndpointPostPositions.from_dict(endpoint_post_positions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


