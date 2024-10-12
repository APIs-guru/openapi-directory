# ListConstraint

A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_value** | **str** | Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this &#x60;Constraint&#x60;. | [optional] 
**supports_under** | **bool** | Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in &#x60;Policy.allowed_values&#x60; and &#x60;Policy.denied_values&#x60;. For example, &#x60;\&quot;under:folders/123\&quot;&#x60; would match any resource under the &#39;folders/123&#39; folder. | [optional] 

## Example

```python
from openapi_client.models.list_constraint import ListConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of ListConstraint from a JSON string
list_constraint_instance = ListConstraint.from_json(json)
# print the JSON string representation of the object
print(ListConstraint.to_json())

# convert the object into a dict
list_constraint_dict = list_constraint_instance.to_dict()
# create an instance of ListConstraint from a dict
list_constraint_from_dict = ListConstraint.from_dict(list_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


