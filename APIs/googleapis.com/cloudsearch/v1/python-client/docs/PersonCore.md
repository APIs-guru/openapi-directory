# PersonCore

Information for rendering a person. NEXT ID: 37

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_me_as** | **str** | Instructions for how to address this person (e.g. custom pronouns). For google.com this is a set of pronouns from a defined list of options. | [optional] 
**admin_to** | [**List[PersonCore]**](PersonCore.md) | People the profile owner is an admin to. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. | [optional] 
**admins** | [**List[PersonCore]**](PersonCore.md) | The profile owner&#39;s admins in no particular order. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. | [optional] 
**availability_status** | **str** |  | [optional] 
**birthday** | [**ModelDate**](ModelDate.md) |  | [optional] 
**calendar_url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 
**chat_url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 
**cost_center** | **str** | Person&#39;s cost center as a string, e.g. \&quot;926: Googler Apps\&quot;. | [optional] 
**department** | **str** | The person&#39;s Organization department, e.g. \&quot;People Operations\&quot;. For google.com this is usually called \&quot;area\&quot;. | [optional] 
**direct_reports** | [**List[PersonCore]**](PersonCore.md) | A subset of the profile owner&#39;s direct reports. The number of entities here may be less than total_direct_reports_count, because typically ProfileResponse does not include all the person&#39;s reports, if there are too many to retrieve efficiently. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. | [optional] 
**dotted_line_managers** | [**List[PersonCore]**](PersonCore.md) | The profile owner&#39;s direct dotted line managers in no particular order. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. | [optional] 
**dotted_line_reports** | [**List[PersonCore]**](PersonCore.md) | A subset of the profile owner&#39;s dotted-line reports. The number of entities here may be less than total_dlr_count. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. | [optional] 
**emails** | **List[str]** | E-mail addresses of the person. The primary or preferred email should be first. | [optional] 
**employee_id** | **str** | Person&#39;s employee number (external ID of type \&quot;organization\&quot;) For google.com this is the badge number (e.g. 2 for Larry Page). | [optional] 
**fingerprint** | **str** | A fingerprint used by PAPI to reliably determine if a resource has changed Externally it is used as part of the etag. | [optional] 
**fte_permille** | **str** | Full-time equivalent (in ‰) (e.g. 800 for a person who&#39;s working 80%). | [optional] 
**geo_location** | [**MapInfo**](MapInfo.md) |  | [optional] 
**gmail_url** | **str** |  | [optional] 
**job_title** | **str** | Profile owner&#39;s job title (e.g. \&quot;Software Engineer\&quot;). For google.com this is the Workday preferred job title. | [optional] 
**keyword_types** | **List[str]** | List of keys to use from the map &#39;keywords&#39;. | [optional] 
**keywords** | **Dict[str, str]** | Custom keywords the domain admin has added. | [optional] 
**links** | [**List[EnterpriseTopazFrontendTeamsLink]**](EnterpriseTopazFrontendTeamsLink.md) | Custom links the profile owner has added. | [optional] 
**location** | **str** | Detailed desk location within the company. For google.com this is the desk location code (e.g. \&quot;DE-MUC-ARP-6T2-6T2C0C\&quot;) if the person has a desk. | [optional] 
**managers** | [**List[PersonCore]**](PersonCore.md) | The profile owner&#39;s management chain from top to bottom, where managers[0] is the CEO, manager[N-2] is the person&#39;s manager&#39;s manager and managers[N-1] is the person&#39;s direct manager. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. | [optional] 
**mission** | **str** | Custom mission statement the profile owner has added. | [optional] 
**name** | **str** | Human-readable Unicode display name. | [optional] 
**office_location** | **str** | Office/building identifier within the company. For google.com this is the office code (e.g. \&quot;DE-MUC-ARP\&quot;). | [optional] 
**person_id** | **str** | The person&#39;s obfuscated Gaia ID. | [optional] 
**phone_numbers** | [**List[EnterpriseTopazFrontendTeamsPersonCorePhoneNumber]**](EnterpriseTopazFrontendTeamsPersonCorePhoneNumber.md) |  | [optional] 
**photo_url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 
**postal_address** | **str** | Postal address of office/building. | [optional] 
**total_direct_reports_count** | **int** | Total count of the profile owner&#39;s direct reports. | [optional] 
**total_dlr_count** | **int** | Total count of the profile owner&#39;s dotted-line reports. | [optional] 
**total_fte_count** | **str** | The sum of all profile owner&#39;s reports and their own full-time-equivalents in ‰ (e.g. 1800 if one report is working 80% and profile owner 100%). | [optional] 
**username** | **str** | External ID of type \&quot;login_id\&quot; for the profile. For google.com this is the username/LDAP. | [optional] 
**waldo_come_back_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.person_core import PersonCore

# TODO update the JSON string below
json = "{}"
# create an instance of PersonCore from a JSON string
person_core_instance = PersonCore.from_json(json)
# print the JSON string representation of the object
print(PersonCore.to_json())

# convert the object into a dict
person_core_dict = person_core_instance.to_dict()
# create an instance of PersonCore from a dict
person_core_from_dict = PersonCore.from_dict(person_core_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


