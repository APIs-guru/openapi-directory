# CustomTargetType

A `CustomTargetType` resource in the Cloud Deploy API. A `CustomTargetType` defines a type of custom target that can be referenced in a `Target` in order to facilitate deploying to other systems besides the supported runtimes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. | [optional] 
**create_time** | **str** | Output only. Time at which the &#x60;CustomTargetType&#x60; was created. | [optional] [readonly] 
**custom_actions** | [**CustomTargetSkaffoldActions**](CustomTargetSkaffoldActions.md) |  | [optional] 
**custom_target_type_id** | **str** | Output only. Resource id of the &#x60;CustomTargetType&#x60;. | [optional] [readonly] 
**description** | **str** | Optional. Description of the &#x60;CustomTargetType&#x60;. Max length is 255 characters. | [optional] 
**etag** | **str** | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes. | [optional] 
**name** | **str** | Optional. Name of the &#x60;CustomTargetType&#x60;. Format is &#x60;projects/{project}/locations/{location}/customTargetTypes/a-z{0,62}&#x60;. | [optional] 
**uid** | **str** | Output only. Unique identifier of the &#x60;CustomTargetType&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. Most recent time at which the &#x60;CustomTargetType&#x60; was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_target_type import CustomTargetType

# TODO update the JSON string below
json = "{}"
# create an instance of CustomTargetType from a JSON string
custom_target_type_instance = CustomTargetType.from_json(json)
# print the JSON string representation of the object
print(CustomTargetType.to_json())

# convert the object into a dict
custom_target_type_dict = custom_target_type_instance.to_dict()
# create an instance of CustomTargetType from a dict
custom_target_type_from_dict = CustomTargetType.from_dict(custom_target_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


