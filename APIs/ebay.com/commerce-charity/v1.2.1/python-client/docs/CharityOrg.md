# CharityOrg

The full location, ID, logo and other details of the charity organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charity_org_id** | **str** | The ID of the charitable organization. | [optional] 
**description** | **str** | The description of the charitable organization. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**logo_image** | [**Image**](Image.md) |  | [optional] 
**mission_statement** | **str** | The mission statement of the charitable organization. | [optional] 
**name** | **str** | The name of the charitable organization. | [optional] 
**registration_id** | **str** | The registration ID for the charitable organization.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; For the US marketplace, this is the EIN.&lt;/span&gt; | [optional] 
**website** | **str** | The link to the website for the charitable organization. | [optional] 

## Example

```python
from openapi_client.models.charity_org import CharityOrg

# TODO update the JSON string below
json = "{}"
# create an instance of CharityOrg from a JSON string
charity_org_instance = CharityOrg.from_json(json)
# print the JSON string representation of the object
print(CharityOrg.to_json())

# convert the object into a dict
charity_org_dict = charity_org_instance.to_dict()
# create an instance of CharityOrg from a dict
charity_org_from_dict = CharityOrg.from_dict(charity_org_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


