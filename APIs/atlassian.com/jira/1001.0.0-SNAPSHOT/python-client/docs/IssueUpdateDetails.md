# IssueUpdateDetails

Details of an issue update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **Dict[str, object]** | List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use &#x60;update&#x60;. Fields included in here cannot be included in &#x60;update&#x60;. | [optional] 
**history_metadata** | [**HistoryMetadata**](HistoryMetadata.md) | Additional issue history details. | [optional] 
**properties** | [**List[EntityProperty]**](EntityProperty.md) | Details of issue properties to be add or update. | [optional] 
**transition** | [**IssueTransition**](IssueTransition.md) | Details of a transition. Required when performing a transition, optional when creating or editing an issue. | [optional] 
**update** | **Dict[str, List[FieldUpdateOperation]]** | A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in &#x60;fields&#x60;. | [optional] 

## Example

```python
from openapi_client.models.issue_update_details import IssueUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IssueUpdateDetails from a JSON string
issue_update_details_instance = IssueUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(IssueUpdateDetails.to_json())

# convert the object into a dict
issue_update_details_dict = issue_update_details_instance.to_dict()
# create an instance of IssueUpdateDetails from a dict
issue_update_details_from_dict = IssueUpdateDetails.from_dict(issue_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


