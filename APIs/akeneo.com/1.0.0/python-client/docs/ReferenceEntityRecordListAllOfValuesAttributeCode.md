# ReferenceEntityRecordListAllOfValuesAttributeCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Channel code of the reference entity record value | [optional] 
**data** | **object** | Reference entity record value. See &lt;a href&#x3D;&#39;/concepts/reference-entities.html#the-data-format&#39;&gt;the &#x60;data&#x60; format&lt;/a&gt; section for more details. | [optional] 
**locale** | **str** | Locale code of the reference entity record value | [optional] 

## Example

```python
from openapi_client.models.reference_entity_record_list_all_of_values_attribute_code import ReferenceEntityRecordListAllOfValuesAttributeCode

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntityRecordListAllOfValuesAttributeCode from a JSON string
reference_entity_record_list_all_of_values_attribute_code_instance = ReferenceEntityRecordListAllOfValuesAttributeCode.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntityRecordListAllOfValuesAttributeCode.to_json())

# convert the object into a dict
reference_entity_record_list_all_of_values_attribute_code_dict = reference_entity_record_list_all_of_values_attribute_code_instance.to_dict()
# create an instance of ReferenceEntityRecordListAllOfValuesAttributeCode from a dict
reference_entity_record_list_all_of_values_attribute_code_from_dict = ReferenceEntityRecordListAllOfValuesAttributeCode.from_dict(reference_entity_record_list_all_of_values_attribute_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


