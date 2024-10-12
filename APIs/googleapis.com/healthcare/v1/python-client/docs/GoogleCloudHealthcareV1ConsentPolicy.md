# GoogleCloudHealthcareV1ConsentPolicy

Represents a user's consent in terms of the resources that can be accessed and under what conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_rule** | [**Expr**](Expr.md) |  | [optional] 
**resource_attributes** | [**List[Attribute]**](Attribute.md) | The resources that this policy applies to. A resource is a match if it matches all the attributes listed here. If empty, this policy applies to all User data mappings for the given user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1_consent_policy import GoogleCloudHealthcareV1ConsentPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1ConsentPolicy from a JSON string
google_cloud_healthcare_v1_consent_policy_instance = GoogleCloudHealthcareV1ConsentPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1ConsentPolicy.to_json())

# convert the object into a dict
google_cloud_healthcare_v1_consent_policy_dict = google_cloud_healthcare_v1_consent_policy_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1ConsentPolicy from a dict
google_cloud_healthcare_v1_consent_policy_from_dict = GoogleCloudHealthcareV1ConsentPolicy.from_dict(google_cloud_healthcare_v1_consent_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


