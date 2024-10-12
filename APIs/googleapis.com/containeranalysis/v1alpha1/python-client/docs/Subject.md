# Subject

Subject refers to the subject of the intoto statement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **Dict[str, str]** | \&quot;\&quot;: \&quot;\&quot; Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet | [optional] 
**name** | **str** | name is the name of the Subject used here | [optional] 

## Example

```python
from openapi_client.models.subject import Subject

# TODO update the JSON string below
json = "{}"
# create an instance of Subject from a JSON string
subject_instance = Subject.from_json(json)
# print the JSON string representation of the object
print(Subject.to_json())

# convert the object into a dict
subject_dict = subject_instance.to_dict()
# create an instance of Subject from a dict
subject_from_dict = Subject.from_dict(subject_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


