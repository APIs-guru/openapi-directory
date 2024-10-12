# Project

Top-level TechPort object representing a NASA technology project and its associated data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acronym** | **str** | Abbreviated name of the project. | [optional] 
**additional_tas** | [**List[TechnologyArea]**](TechnologyArea.md) | List of additional and cross-cutting technology areas associated with the project. | [optional] 
**benefits** | **str** | Describes the benefits offered to NASA funded and planned missions, unfunded or planned missions, commercial space industry, and to the nation. | [optional] 
**closeout_documents** | **List[str]** | List of document files or links to the project final report closeout documentation. | [optional] 
**closeout_summary** | **str** | The project closeout summary excerpt. | [optional] 
**co_funding_partners** | [**List[Organization]**](Organization.md) | Other government agencies, NASA Mission Directoratres, universities, or commercial entities performing contributing resources to this project. | [optional] 
**co_investigators** | **List[str]** | Names of the additional investigators who are scientists or engineers for this project. | [optional] 
**description** | **str** | A detailed description of the project. | [optional] 
**destinations** | **List[str]** | List of the NASA destinations the technology on this project helps achieve. | [optional] 
**end_date** | **str** | The month and year the project is expected to complete its work. | [optional] 
**id** | **int** | Unique identifier for the project. | [optional] 
**last_updated** | **date** | ISO 8601 full-date in the format YYYY-MM-DD describing the last time this project was updated. | [optional] 
**lead_organization** | [**Organization**](Organization.md) |  | [optional] 
**library_items** | [**List[LibraryItem]**](LibraryItem.md) | List of library items in the project library. | [optional] 
**primary_tas** | [**List[TechnologyArea]**](TechnologyArea.md) | List of primary technolgy areas (from the NASA Technology Roadmap) associated with the project. | [optional] 
**principal_investigators** | **List[str]** | Names of the Principal Investigators who are the lead scientists or engineers for this project. | [optional] 
**program_directors** | **List[str]** | Names of the Program Directors responsible for the management of this project. | [optional] 
**program_managers** | **List[str]** | Names of the Program Managers responsible for the management of this project. | [optional] 
**project_managers** | **List[str]** | Names of the Project Managers responsible for the management of this project. | [optional] 
**responsible_mission_directorate_or_office** | **str** | The NASA Mission Directorate or Office that is the primary funding source for this project. | [optional] 
**responsible_program** | **str** | The NASA program that is the primary funding source for this project. | [optional] 
**start_date** | **str** | The month and year the project was authorized to proceed. | [optional] 
**status** | **str** | Indicates whether the project is currently active, completed, or canceled. | [optional] 
**supported_mission_type** | **str** | The supported mission type (Projected Mission, Planned Mission, or Pull). | [optional] 
**supporting_organizations** | [**List[Organization]**](Organization.md) | The supporting organizations for this project that are conducting work on the project. | [optional] 
**technology_maturity_current** | **str** | The current technology maturity (technology readiness level) of the project. | [optional] 
**technology_maturity_end** | **str** | The estimated technology maturity (technology readiness level) of the project at its end. | [optional] 
**technology_maturity_start** | **str** | The technology maturity (technology readiness level) of the project at its beginning. | [optional] 
**title** | **str** | Title of the project. | [optional] 
**website** | **str** | The URL for the associated website. | [optional] 
**work_locations** | **List[str]** | States and territories with people performing work on this project. | [optional] 

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


