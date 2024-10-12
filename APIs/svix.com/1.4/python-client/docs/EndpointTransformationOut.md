# EndpointTransformationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.endpoint_transformation_out import EndpointTransformationOut

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointTransformationOut from a JSON string
endpoint_transformation_out_instance = EndpointTransformationOut.from_json(json)
# print the JSON string representation of the object
print(EndpointTransformationOut.to_json())

# convert the object into a dict
endpoint_transformation_out_dict = endpoint_transformation_out_instance.to_dict()
# create an instance of EndpointTransformationOut from a dict
endpoint_transformation_out_from_dict = EndpointTransformationOut.from_dict(endpoint_transformation_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


