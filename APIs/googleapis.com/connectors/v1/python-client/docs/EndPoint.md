# EndPoint

Endpoint message includes details of the Destination endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_uri** | **str** | The URI of the Endpoint. | [optional] 
**headers** | [**List[Header]**](Header.md) | List of Header to be added to the Endpoint. | [optional] 

## Example

```python
from openapi_client.models.end_point import EndPoint

# TODO update the JSON string below
json = "{}"
# create an instance of EndPoint from a JSON string
end_point_instance = EndPoint.from_json(json)
# print the JSON string representation of the object
print(EndPoint.to_json())

# convert the object into a dict
end_point_dict = end_point_instance.to_dict()
# create an instance of EndPoint from a dict
end_point_from_dict = EndPoint.from_dict(end_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


