# Branch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atmat_branch** | **bool** | Indicated whether an ATM is at the branch | 
**accessibility_types** | **str** | Information about the accessibility | [optional] 
**address** | [**BranchAddress**](BranchAddress.md) |  | 
**alternate_phone** | [**List[BranchAlternatePhoneInner]**](BranchAlternatePhoneInner.md) |  | [optional] 
**arrival_time** | **str** | Time that the mobile branch is scheduled to arrive | [optional] 
**branch_description** | **str** | Description of the branch | [optional] 
**branch_facilities_name** | **List[str]** | Information about branch facilities | [optional] 
**branch_identification** | **str** | Unique and unambiguous identification of a retail branch of a financial institution | 
**branch_mediated_service_name** | **List[str]** | Information about mediated branch facilities | [optional] 
**branch_name** | **str** | Name by which a party is known and which is usually used to identify that party | [optional] 
**branch_other_facilities** | **List[str]** | Any other facilities not mentioned in BranchFacilitiesName | [optional] 
**branch_other_mediated_services** | **List[str]** | Mediated Services not described in BranchMediatedServiceName | [optional] 
**branch_other_self_services** | **List[str]** | Self Services not described in BranchSelfServeServiceName | [optional] 
**branch_photo** | **str** | Image related to the branch | [optional] 
**branch_self_serve_service_name** | **List[str]** |  | [optional] 
**branch_type** | **str** | Information on the type of branch | 
**customer_segment** | **List[str]** | Customer segment which the branch is able to service | 
**days_of_the_week** | **str** | Description on when the mobile branch is available. e.g. The weekend of Glastonbury festival; or Mondays and during the shrimp season also Wednesdays | [optional] 
**departure_time** | **str** | Time that the mobile branch is scheduled to depart | [optional] 
**fax_number** | **List[str]** | Collection of information that identifies a FAX number, as defined by telecom services. | [optional] 
**geographic_location** | [**ATMGeographicLocation**](ATMGeographicLocation.md) |  | [optional] 
**opening_times** | **List[object]** | Branch Opening Times | 
**organisation** | [**ATMOrganisation**](ATMOrganisation.md) |  | 
**parking_location** | **str** | Place where the mobile branch is located, such as between the news agent and the church. | [optional] 
**planned_branch_closure** | [**List[BranchPlannedBranchClosureInner]**](BranchPlannedBranchClosureInner.md) |  | [optional] 
**stop_name** | **str** | Name of the stop of the mobile branch | [optional] 
**telephone_number** | **str** | Collection of information that identifies a phone number, as defined by telecom services. | 

## Example

```python
from openapi_client.models.branch import Branch

# TODO update the JSON string below
json = "{}"
# create an instance of Branch from a JSON string
branch_instance = Branch.from_json(json)
# print the JSON string representation of the object
print(Branch.to_json())

# convert the object into a dict
branch_dict = branch_instance.to_dict()
# create an instance of Branch from a dict
branch_from_dict = Branch.from_dict(branch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


