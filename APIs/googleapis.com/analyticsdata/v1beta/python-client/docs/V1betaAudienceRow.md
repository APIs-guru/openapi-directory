# V1betaAudienceRow

Dimension value attributes for the audience user row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_values** | [**List[V1betaAudienceDimensionValue]**](V1betaAudienceDimensionValue.md) | Each dimension value attribute for an audience user. One dimension value will be added for each dimension column requested. | [optional] 

## Example

```python
from openapi_client.models.v1beta_audience_row import V1betaAudienceRow

# TODO update the JSON string below
json = "{}"
# create an instance of V1betaAudienceRow from a JSON string
v1beta_audience_row_instance = V1betaAudienceRow.from_json(json)
# print the JSON string representation of the object
print(V1betaAudienceRow.to_json())

# convert the object into a dict
v1beta_audience_row_dict = v1beta_audience_row_instance.to_dict()
# create an instance of V1betaAudienceRow from a dict
v1beta_audience_row_from_dict = V1betaAudienceRow.from_dict(v1beta_audience_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


