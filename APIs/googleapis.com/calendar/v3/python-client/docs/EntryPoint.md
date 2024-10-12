# EntryPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_code** | **str** | The access code to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional. | [optional] 
**entry_point_features** | **List[str]** | Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point. | [optional] 
**entry_point_type** | **str** | The type of the conference entry point. Possible values are:   - \&quot;video\&quot; - joining a conference over HTTP. A conference can have zero or one video entry point. - \&quot;phone\&quot; - joining a conference by dialing a phone number. A conference can have zero or more phone entry points. - \&quot;sip\&quot; - joining a conference over SIP. A conference can have zero or one sip entry point. - \&quot;more\&quot; - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference. | [optional] 
**label** | **str** | The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters. Examples:   - for video: meet.google.com/aaa-bbbb-ccc - for phone: +1 123 268 2601 - for sip: 12345678@altostrat.com - for more: should not be filled   Optional. | [optional] 
**meeting_code** | **str** | The meeting code to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional. | [optional] 
**passcode** | **str** | The passcode to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. | [optional] 
**password** | **str** | The password to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional. | [optional] 
**pin** | **str** | The PIN to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional. | [optional] 
**region_code** | **str** | The CLDR/ISO 3166 region code for the country associated with this phone access. Example: \&quot;SE\&quot; for Sweden. Calendar backend will populate this field only for EntryPointType.PHONE. | [optional] 
**uri** | **str** | The URI of the entry point. The maximum length is 1300 characters. Format:   - for video, http: or https: schema is required. - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234). - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com. - for more, http: or https: schema is required. | [optional] 

## Example

```python
from openapi_client.models.entry_point import EntryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of EntryPoint from a JSON string
entry_point_instance = EntryPoint.from_json(json)
# print the JSON string representation of the object
print(EntryPoint.to_json())

# convert the object into a dict
entry_point_dict = entry_point_instance.to_dict()
# create an instance of EntryPoint from a dict
entry_point_from_dict = EntryPoint.from_dict(entry_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


