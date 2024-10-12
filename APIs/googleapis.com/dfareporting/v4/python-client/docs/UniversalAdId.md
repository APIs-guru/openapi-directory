# UniversalAdId

A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registry** | **str** | Registry used for the Ad ID value. | [optional] 
**value** | **str** | ID value for this creative. Only alphanumeric characters and the following symbols are valid: \&quot;_/\\-\&quot;. Maximum length is 64 characters. Read only when registry is DCM. | [optional] 

## Example

```python
from openapi_client.models.universal_ad_id import UniversalAdId

# TODO update the JSON string below
json = "{}"
# create an instance of UniversalAdId from a JSON string
universal_ad_id_instance = UniversalAdId.from_json(json)
# print the JSON string representation of the object
print(UniversalAdId.to_json())

# convert the object into a dict
universal_ad_id_dict = universal_ad_id_instance.to_dict()
# create an instance of UniversalAdId from a dict
universal_ad_id_from_dict = UniversalAdId.from_dict(universal_ad_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


