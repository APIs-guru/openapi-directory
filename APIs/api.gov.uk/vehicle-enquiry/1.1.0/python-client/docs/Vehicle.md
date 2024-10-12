# Vehicle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**art_end_date** | **date** | Additional Rate of Tax End Date, format: YYYY-MM-DD | [optional] 
**co2_emissions** | **int** | Carbon Dioxide emissions in grams per kilometre | [optional] 
**colour** | **str** | Vehicle colour | [optional] 
**date_of_last_v5_c_issued** | **date** | Date of last V5C issued | [optional] 
**engine_capacity** | **int** | Engine capacity in cubic centimetres | [optional] 
**euro_status** | **str** | Euro Status (Dealer / Customer Provided (new vehicles)) | [optional] 
**fuel_type** | **str** | Fuel type (Method of Propulsion) | [optional] 
**make** | **str** | Vehicle make | [optional] 
**marked_for_export** | **bool** | True only if vehicle has been export marked | [optional] 
**month_of_first_dvla_registration** | **date** | Month of First DVLA Registration | [optional] 
**month_of_first_registration** | **date** | Month of First Registration | [optional] 
**mot_expiry_date** | **date** | Mot Expiry Date | [optional] 
**mot_status** | **str** | MOT Status of the vehicle | [optional] 
**real_driving_emissions** | **str** | Real Driving Emissions value | [optional] 
**registration_number** | **str** | Registration number of the vehicle | 
**revenue_weight** | **int** | Revenue weight in kilograms | [optional] 
**tax_due_date** | **date** | Date of tax liablity, Used in calculating licence information presented to user | [optional] 
**tax_status** | **str** | Tax status of the vehicle | [optional] 
**type_approval** | **str** | Vehicle Type Approval Category | [optional] 
**wheelplan** | **str** | Vehicle wheel plan | [optional] 
**year_of_manufacture** | **int** | Year of Manufacture | [optional] 

## Example

```python
from openapi_client.models.vehicle import Vehicle

# TODO update the JSON string below
json = "{}"
# create an instance of Vehicle from a JSON string
vehicle_instance = Vehicle.from_json(json)
# print the JSON string representation of the object
print(Vehicle.to_json())

# convert the object into a dict
vehicle_dict = vehicle_instance.to_dict()
# create an instance of Vehicle from a dict
vehicle_from_dict = Vehicle.from_dict(vehicle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


