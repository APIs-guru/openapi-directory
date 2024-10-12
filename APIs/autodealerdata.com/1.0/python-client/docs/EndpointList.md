# EndpointList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_points** | **List[str]** |  | [optional] [default to ["*"]]

## Example

```python
from openapi_client.models.endpoint_list import EndpointList

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointList from a JSON string
endpoint_list_instance = EndpointList.from_json(json)
# print the JSON string representation of the object
print(EndpointList.to_json())

# convert the object into a dict
endpoint_list_dict = endpoint_list_instance.to_dict()
# create an instance of EndpointList from a dict
endpoint_list_from_dict = EndpointList.from_dict(endpoint_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


