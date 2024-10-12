# ControllersAdvisoryDetailAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cves** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**fixes** | **str** |  | [optional] 
**modified_date** | **str** |  | [optional] 
**packages** | **Dict[str, str]** |  | [optional] 
**public_date** | **str** |  | [optional] 
**references** | **List[str]** |  | [optional] 
**severity** | **int** |  | [optional] 
**solution** | **str** |  | [optional] 
**synopsis** | **str** |  | [optional] 
**topic** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisory_detail_attributes import ControllersAdvisoryDetailAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisoryDetailAttributes from a JSON string
controllers_advisory_detail_attributes_instance = ControllersAdvisoryDetailAttributes.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisoryDetailAttributes.to_json())

# convert the object into a dict
controllers_advisory_detail_attributes_dict = controllers_advisory_detail_attributes_instance.to_dict()
# create an instance of ControllersAdvisoryDetailAttributes from a dict
controllers_advisory_detail_attributes_from_dict = ControllersAdvisoryDetailAttributes.from_dict(controllers_advisory_detail_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


