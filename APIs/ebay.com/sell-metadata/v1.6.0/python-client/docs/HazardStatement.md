# HazardStatement

A type that describes hazard statements for hazardous materials labels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statement_description** | **str** | The description of the statement localized to the default language of the marketplace. For sample values, see &lt;a href&#x3D;&#39;/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard&#39;&gt;Hazard statement sample values&lt;/a&gt;. | [optional] 
**statement_id** | **str** | The identifier of the statement. For sample values, see &lt;a href&#x3D;&#39;/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard&#39;&gt;Hazard statement sample values&lt;/a&gt;. | [optional] 

## Example

```python
from openapi_client.models.hazard_statement import HazardStatement

# TODO update the JSON string below
json = "{}"
# create an instance of HazardStatement from a JSON string
hazard_statement_instance = HazardStatement.from_json(json)
# print the JSON string representation of the object
print(HazardStatement.to_json())

# convert the object into a dict
hazard_statement_dict = hazard_statement_instance.to_dict()
# create an instance of HazardStatement from a dict
hazard_statement_from_dict = HazardStatement.from_dict(hazard_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


