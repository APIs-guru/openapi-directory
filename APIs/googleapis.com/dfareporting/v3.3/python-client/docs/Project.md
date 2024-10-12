# Project

Contains properties of a Planning project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this project. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this project. | [optional] 
**audience_age_group** | **str** | Audience age group of this project. | [optional] 
**audience_gender** | **str** | Audience gender of this project. | [optional] 
**budget** | **str** | Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar. | [optional] 
**client_billing_code** | **str** | Client billing code of this project. | [optional] 
**client_name** | **str** | Name of the project client. | [optional] 
**end_date** | **date** |  | [optional] 
**id** | **str** | ID of this project. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#project\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**name** | **str** | Name of this project. | [optional] 
**overview** | **str** | Overview of this project. | [optional] 
**start_date** | **date** |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of this project. | [optional] 
**target_clicks** | **str** | Number of clicks that the advertiser is targeting. | [optional] 
**target_conversions** | **str** | Number of conversions that the advertiser is targeting. | [optional] 
**target_cpa_nanos** | **str** | CPA that the advertiser is targeting. | [optional] 
**target_cpc_nanos** | **str** | CPC that the advertiser is targeting. | [optional] 
**target_cpm_active_view_nanos** | **str** | vCPM from Active View that the advertiser is targeting. | [optional] 
**target_cpm_nanos** | **str** | CPM that the advertiser is targeting. | [optional] 
**target_impressions** | **str** | Number of impressions that the advertiser is targeting. | [optional] 

## Example

```python
from openapi_client.models.project import Project

# TODO update the JSON string below
json = "{}"
# create an instance of Project from a JSON string
project_instance = Project.from_json(json)
# print the JSON string representation of the object
print(Project.to_json())

# convert the object into a dict
project_dict = project_instance.to_dict()
# create an instance of Project from a dict
project_from_dict = Project.from_dict(project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


