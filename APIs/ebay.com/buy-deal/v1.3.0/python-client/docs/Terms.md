# Terms

The terms for the event, provided in a full-text description and summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_text** | **str** | A full-text description of the terms. | [optional] 
**summary** | **str** | A summarized description of the terms. | [optional] 

## Example

```python
from openapi_client.models.terms import Terms

# TODO update the JSON string below
json = "{}"
# create an instance of Terms from a JSON string
terms_instance = Terms.from_json(json)
# print the JSON string representation of the object
print(Terms.to_json())

# convert the object into a dict
terms_dict = terms_instance.to_dict()
# create an instance of Terms from a dict
terms_from_dict = Terms.from_dict(terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


