# EntityIDVDetailsObject

Contains all the details we need to create/update an entity and generate an IDV token 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **str** | The applicantId previously supplied when creating a token for the first time for an entity. Only required if re-submitting for a fresh token on a previously created applicant.  | [optional] 
**application_id** | **str** | If this is for a native application SDK, then we need the applicationId as reported by the SDK. This will then be tied to the token so it cannot be used in another application or handset.  You must send either an applicationID or a referrer (see below)  | [optional] 
**entity** | [**EntityObject**](EntityObject.md) |  | 
**referrer** | **str** | If this is for a web SDK, then you need to supply the referrer domain so that the token can be validated by the IDV service  You must send either a referrer or an applicationID (see above)  | [optional] 

## Example

```python
from openapi_client.models.entity_idv_details_object import EntityIDVDetailsObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityIDVDetailsObject from a JSON string
entity_idv_details_object_instance = EntityIDVDetailsObject.from_json(json)
# print the JSON string representation of the object
print(EntityIDVDetailsObject.to_json())

# convert the object into a dict
entity_idv_details_object_dict = entity_idv_details_object_instance.to_dict()
# create an instance of EntityIDVDetailsObject from a dict
entity_idv_details_object_from_dict = EntityIDVDetailsObject.from_dict(entity_idv_details_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


