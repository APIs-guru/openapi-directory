# AppliedLabelChange

Label changes that were made on the Target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**List[AppliedLabelChangeDetail]**](AppliedLabelChangeDetail.md) | Changes that were made to the Label on the Target. | [optional] 

## Example

```python
from openapi_client.models.applied_label_change import AppliedLabelChange

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedLabelChange from a JSON string
applied_label_change_instance = AppliedLabelChange.from_json(json)
# print the JSON string representation of the object
print(AppliedLabelChange.to_json())

# convert the object into a dict
applied_label_change_dict = applied_label_change_instance.to_dict()
# create an instance of AppliedLabelChange from a dict
applied_label_change_from_dict = AppliedLabelChange.from_dict(applied_label_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


