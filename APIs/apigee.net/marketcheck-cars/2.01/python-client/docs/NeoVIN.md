# NeoVIN

Describes the NeoVIN specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_options_details** | **object** | Listing of all options and packages with detailed equipment identified that could have been installed on the vehicle | [optional] 
**body_subtype** | **str** | Body subtype (cab) of the vehicle | [optional] 
**body_type** | **str** | Body type of the vehicle | [optional] 
**city_mpg** | **float** | City miles per gallon | [optional] 
**combined_msrp** | **float** | Calculated combination of base MSRP with the delivery charges and the installed options MSRP | [optional] 
**created_at** | **int** | vin first decoded at timestamp | [optional] 
**created_at_date** | **str** | vin first decoded at date | [optional] 
**decode_version** | **int** | This will represent if previous vin decode values are updated | [optional] 
**delivery_charges** | **float** | Manufacturer defined delivery charges | [optional] 
**doors** | **int** | Number of doors on the vehicle | [optional] 
**drivetrain** | **str** | Identified drivetrain of the vehicle | [optional] 
**engine** | **str** | Base identification of the number of cylinders and configuration of the installed engine on the vehicle | [optional] 
**exterior_color** | **object** | The manufacturer defined option code and name for the exterior color of the vehicle | [optional] 
**features** | **object** | Normalized feature set of equipment identified that have been identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option | [optional] 
**fuel_type** | **str** | Identified Fuel type of the vehicle | [optional] 
**height** | **float** | Overall height of the vehicle (in) | [optional] 
**highway_mpg** | **float** | Highway miles per gallon | [optional] 
**installed_equipment** | **object** | Detailed equipment identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option | [optional] 
**installed_options_details** | **object** | Listing of all options and packages with detailed equipment identified that have been identified as installed on the vehicle | [optional] 
**installed_options_msrp** | **float** | Calculated combination of the MSRP for the installed options and packages | [optional] 
**interior_color** | **object** | The manufacturer defined option code and name for the interior color of the vehicle | [optional] 
**length** | **float** | Overall length of the vehicle (in) | [optional] 
**listing_confidence** | **str** | Identification of primary source data used for trim and installed colors and options | [optional] 
**make** | **str** | Make of the vehicle | [optional] 
**manufacturer_code** | **str** | Manufacturer code of the vehicle | [optional] 
**model** | **str** | Model of the vehicle | [optional] 
**msrp** | **float** | Base MSRP as defined for the defined version of that vehicle with no options installed | [optional] 
**options_packages** | **str** | Option and package codes installed on the vehicle | [optional] 
**package_code** | **str** | Extracted manufacturer package code related to selection of the vehicle version (where available / applicable) | [optional] 
**package_description** | **str** | Extracted manufacturer package code description (where available / applicable) | [optional] 
**seating_capacity** | **float** | Identified seating capacity of the vehicle | [optional] 
**squish_vin** | **str** | Vin prefix identification used in the decoding of the vehicle | [optional] 
**transmission** | **str** | Identified installed Transmission of the vehicle | [optional] 
**transmission_confidence** | **str** | Identification of confidence related to the selection of the installed transmission | [optional] 
**transmission_description** | **str** | The description of the installed transmission | [optional] 
**trim** | **str** | Trim of the vehicle | [optional] 
**trim_confidence** | **str** | Identification of confidence related to the selection of the trim | [optional] 
**updated_at** | **int** | vin last decoded at timestamp | [optional] 
**updated_at_date** | **str** | vin last decoded at date | [optional] 
**version** | **str** | Version Name of the vehicle | [optional] 
**version_confidence** | **str** | Identification of confidence related to the selection of the vehicle version | [optional] 
**vin** | **str** | 17 char long VIN of the vehicle | [optional] 
**weight** | **float** | Gross vehicle weight (lbs) | [optional] 
**width** | **float** | Overall width of the vehicle (in) | [optional] 
**year** | **int** | Model Year of the vehicle | [optional] 

## Example

```python
from openapi_client.models.neo_vin import NeoVIN

# TODO update the JSON string below
json = "{}"
# create an instance of NeoVIN from a JSON string
neo_vin_instance = NeoVIN.from_json(json)
# print the JSON string representation of the object
print(NeoVIN.to_json())

# convert the object into a dict
neo_vin_dict = neo_vin_instance.to_dict()
# create an instance of NeoVIN from a dict
neo_vin_from_dict = NeoVIN.from_dict(neo_vin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


