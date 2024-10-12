# V1betaAudienceDimension

An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the `QueryAudienceExportResponse`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | Optional. The API name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions) for the list of dimension names. | [optional] 

## Example

```python
from openapi_client.models.v1beta_audience_dimension import V1betaAudienceDimension

# TODO update the JSON string below
json = "{}"
# create an instance of V1betaAudienceDimension from a JSON string
v1beta_audience_dimension_instance = V1betaAudienceDimension.from_json(json)
# print the JSON string representation of the object
print(V1betaAudienceDimension.to_json())

# convert the object into a dict
v1beta_audience_dimension_dict = v1beta_audience_dimension_instance.to_dict()
# create an instance of V1betaAudienceDimension from a dict
v1beta_audience_dimension_from_dict = V1betaAudienceDimension.from_dict(v1beta_audience_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


