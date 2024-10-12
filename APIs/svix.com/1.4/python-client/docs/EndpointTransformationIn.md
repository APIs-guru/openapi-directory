# EndpointTransformationIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.endpoint_transformation_in import EndpointTransformationIn

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointTransformationIn from a JSON string
endpoint_transformation_in_instance = EndpointTransformationIn.from_json(json)
# print the JSON string representation of the object
print(EndpointTransformationIn.to_json())

# convert the object into a dict
endpoint_transformation_in_dict = endpoint_transformation_in_instance.to_dict()
# create an instance of EndpointTransformationIn from a dict
endpoint_transformation_in_from_dict = EndpointTransformationIn.from_dict(endpoint_transformation_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


