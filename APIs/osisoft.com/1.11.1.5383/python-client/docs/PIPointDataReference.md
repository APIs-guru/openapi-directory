# PIPointDataReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptor** | **str** |  | [optional] 
**digital_set_name** | **str** |  | [optional] 
**display_digits** | **int** |  | [optional] 
**engineering_units** | **str** |  | [optional] 
**future** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**point_class** | **str** |  | [optional] 
**point_type** | **str** |  | [optional] 
**span** | **float** |  | [optional] 
**step** | **bool** |  | [optional] 
**web_id** | **str** |  | [optional] 
**zero** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.pi_point_data_reference import PIPointDataReference

# TODO update the JSON string below
json = "{}"
# create an instance of PIPointDataReference from a JSON string
pi_point_data_reference_instance = PIPointDataReference.from_json(json)
# print the JSON string representation of the object
print(PIPointDataReference.to_json())

# convert the object into a dict
pi_point_data_reference_dict = pi_point_data_reference_instance.to_dict()
# create an instance of PIPointDataReference from a dict
pi_point_data_reference_from_dict = PIPointDataReference.from_dict(pi_point_data_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


