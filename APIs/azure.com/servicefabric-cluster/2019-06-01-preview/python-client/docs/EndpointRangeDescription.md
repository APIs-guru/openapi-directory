# EndpointRangeDescription

Port range details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_port** | **int** | End port of a range of ports | 
**start_port** | **int** | Starting port of a range of ports | 

## Example

```python
from openapi_client.models.endpoint_range_description import EndpointRangeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointRangeDescription from a JSON string
endpoint_range_description_instance = EndpointRangeDescription.from_json(json)
# print the JSON string representation of the object
print(EndpointRangeDescription.to_json())

# convert the object into a dict
endpoint_range_description_dict = endpoint_range_description_instance.to_dict()
# create an instance of EndpointRangeDescription from a dict
endpoint_range_description_from_dict = EndpointRangeDescription.from_dict(endpoint_range_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


