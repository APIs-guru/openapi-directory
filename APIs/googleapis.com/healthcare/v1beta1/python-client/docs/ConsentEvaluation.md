# ConsentEvaluation

The detailed evaluation of a particular Consent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_result** | **str** | The evaluation result. | [optional] 

## Example

```python
from openapi_client.models.consent_evaluation import ConsentEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentEvaluation from a JSON string
consent_evaluation_instance = ConsentEvaluation.from_json(json)
# print the JSON string representation of the object
print(ConsentEvaluation.to_json())

# convert the object into a dict
consent_evaluation_dict = consent_evaluation_instance.to_dict()
# create an instance of ConsentEvaluation from a dict
consent_evaluation_from_dict = ConsentEvaluation.from_dict(consent_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


