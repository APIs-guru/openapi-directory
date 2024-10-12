# SuppressionProperties

The properties of the suppression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suppression_id** | **str** | The GUID of the suppression. | [optional] 
**ttl** | **str** | The duration for which the suppression is valid. | [optional] 

## Example

```python
from openapi_client.models.suppression_properties import SuppressionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SuppressionProperties from a JSON string
suppression_properties_instance = SuppressionProperties.from_json(json)
# print the JSON string representation of the object
print(SuppressionProperties.to_json())

# convert the object into a dict
suppression_properties_dict = suppression_properties_instance.to_dict()
# create an instance of SuppressionProperties from a dict
suppression_properties_from_dict = SuppressionProperties.from_dict(suppression_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


