# GoogleHomeEnterpriseSdmV1Structure

Structure resource represents an instance of enterprise managed home or hotel room.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The resource name of the structure. For example: \&quot;enterprises/XYZ/structures/ABC\&quot;. | [optional] [readonly] 
**traits** | **Dict[str, object]** | Structure traits. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_structure import GoogleHomeEnterpriseSdmV1Structure

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1Structure from a JSON string
google_home_enterprise_sdm_v1_structure_instance = GoogleHomeEnterpriseSdmV1Structure.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1Structure.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_structure_dict = google_home_enterprise_sdm_v1_structure_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1Structure from a dict
google_home_enterprise_sdm_v1_structure_from_dict = GoogleHomeEnterpriseSdmV1Structure.from_dict(google_home_enterprise_sdm_v1_structure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


