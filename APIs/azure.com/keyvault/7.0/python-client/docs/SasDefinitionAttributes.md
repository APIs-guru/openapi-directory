# SasDefinitionAttributes

The SAS definition management attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Creation time in UTC. | [optional] [readonly] 
**enabled** | **bool** | the enabled state of the object. | [optional] 
**recovery_level** | **str** | Reflects the deletion recovery level currently in effect for SAS definitions in the current vault. If it contains &#39;Purgeable&#39; the SAS definition can be permanently deleted by a privileged user; otherwise, only the system can purge the SAS definition, at the end of the retention interval. | [optional] [readonly] 
**updated** | **int** | Last updated time in UTC. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_definition_attributes import SasDefinitionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of SasDefinitionAttributes from a JSON string
sas_definition_attributes_instance = SasDefinitionAttributes.from_json(json)
# print the JSON string representation of the object
print(SasDefinitionAttributes.to_json())

# convert the object into a dict
sas_definition_attributes_dict = sas_definition_attributes_instance.to_dict()
# create an instance of SasDefinitionAttributes from a dict
sas_definition_attributes_from_dict = SasDefinitionAttributes.from_dict(sas_definition_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


