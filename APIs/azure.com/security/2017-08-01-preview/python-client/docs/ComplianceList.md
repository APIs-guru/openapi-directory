# ComplianceList

List of Compliance objects response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[Compliance]**](Compliance.md) | List of Compliance objects | [optional] 

## Example

```python
from openapi_client.models.compliance_list import ComplianceList

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceList from a JSON string
compliance_list_instance = ComplianceList.from_json(json)
# print the JSON string representation of the object
print(ComplianceList.to_json())

# convert the object into a dict
compliance_list_dict = compliance_list_instance.to_dict()
# create an instance of ComplianceList from a dict
compliance_list_from_dict = ComplianceList.from_dict(compliance_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


