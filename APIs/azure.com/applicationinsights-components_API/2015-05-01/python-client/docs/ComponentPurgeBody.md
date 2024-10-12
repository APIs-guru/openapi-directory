# ComponentPurgeBody

Describes the body of a purge request for an App Insights component

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[ComponentPurgeBodyFilters]**](ComponentPurgeBodyFilters.md) | The set of columns and filters (queries) to run over them to purge the resulting data. | 
**table** | **str** | Table from which to purge data. | 

## Example

```python
from openapi_client.models.component_purge_body import ComponentPurgeBody

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentPurgeBody from a JSON string
component_purge_body_instance = ComponentPurgeBody.from_json(json)
# print the JSON string representation of the object
print(ComponentPurgeBody.to_json())

# convert the object into a dict
component_purge_body_dict = component_purge_body_instance.to_dict()
# create an instance of ComponentPurgeBody from a dict
component_purge_body_from_dict = ComponentPurgeBody.from_dict(component_purge_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


