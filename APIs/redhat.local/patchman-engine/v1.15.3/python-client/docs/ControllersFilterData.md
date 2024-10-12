# ControllersFilterData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_filter_data import ControllersFilterData

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersFilterData from a JSON string
controllers_filter_data_instance = ControllersFilterData.from_json(json)
# print the JSON string representation of the object
print(ControllersFilterData.to_json())

# convert the object into a dict
controllers_filter_data_dict = controllers_filter_data_instance.to_dict()
# create an instance of ControllersFilterData from a dict
controllers_filter_data_from_dict = ControllersFilterData.from_dict(controllers_filter_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


