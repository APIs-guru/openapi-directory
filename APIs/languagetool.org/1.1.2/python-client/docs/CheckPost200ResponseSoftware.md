# CheckPost200ResponseSoftware


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **int** | Version of this API response. We don&#39;t expect to make incompatible changes, so this can also be increased for newly added fields. | 
**build_date** | **str** | Date when the software was built, e.g. &#39;2016-05-25&#39;. | 
**name** | **str** | Usually &#39;LanguageTool&#39;. | 
**premium** | **bool** | true if you&#39;re using a Premium account with all the premium text checks (since LanguageTool 4.2) | [optional] 
**status** | **str** | An optional warning, e.g. when the API format is not stable. | [optional] 
**version** | **str** | A version string like &#39;3.3&#39; or &#39;3.4-SNAPSHOT&#39;. | 

## Example

```python
from openapi_client.models.check_post200_response_software import CheckPost200ResponseSoftware

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPost200ResponseSoftware from a JSON string
check_post200_response_software_instance = CheckPost200ResponseSoftware.from_json(json)
# print the JSON string representation of the object
print(CheckPost200ResponseSoftware.to_json())

# convert the object into a dict
check_post200_response_software_dict = check_post200_response_software_instance.to_dict()
# create an instance of CheckPost200ResponseSoftware from a dict
check_post200_response_software_from_dict = CheckPost200ResponseSoftware.from_dict(check_post200_response_software_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


