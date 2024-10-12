# ReferenceEntityRecordListAllOfValues

Record attributes values, see <a href='/concepts/reference-entities.html#focus-on-the-reference-entity-record-values'>Reference entity record values</a> section for more details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_code** | [**List[ReferenceEntityRecordListAllOfValuesAttributeCode]**](ReferenceEntityRecordListAllOfValuesAttributeCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_entity_record_list_all_of_values import ReferenceEntityRecordListAllOfValues

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceEntityRecordListAllOfValues from a JSON string
reference_entity_record_list_all_of_values_instance = ReferenceEntityRecordListAllOfValues.from_json(json)
# print the JSON string representation of the object
print(ReferenceEntityRecordListAllOfValues.to_json())

# convert the object into a dict
reference_entity_record_list_all_of_values_dict = reference_entity_record_list_all_of_values_instance.to_dict()
# create an instance of ReferenceEntityRecordListAllOfValues from a dict
reference_entity_record_list_all_of_values_from_dict = ReferenceEntityRecordListAllOfValues.from_dict(reference_entity_record_list_all_of_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


