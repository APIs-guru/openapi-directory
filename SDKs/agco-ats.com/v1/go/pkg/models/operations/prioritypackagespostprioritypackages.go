package operations

import (
"openapi/pkg/models/shared")

type PriorityPackagesPostPriorityPackagesRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    UpdateSystemModelsPriorityPackage *shared.UpdateSystemModelsPriorityPackage `request:"mediaType=application/json"`
    UpdateSystemModelsPriorityPackage1 *shared.UpdateSystemModelsPriorityPackage `request:"mediaType=application/x-www-form-urlencoded"`
    UpdateSystemModelsPriorityPackage2 *shared.UpdateSystemModelsPriorityPackage `request:"mediaType=text/json"`
    
}

type PriorityPackagesPostPriorityPackagesRequest struct {
    Request PriorityPackagesPostPriorityPackagesRequests 
    
}

type PriorityPackagesPostPriorityPackagesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    PriorityPackagesPostPriorityPackages200ApplicationJSONString *string 
    PriorityPackagesPostPriorityPackages200ApplicationXMLString *string 
    PriorityPackagesPostPriorityPackages200TextJSONString *string 
    PriorityPackagesPostPriorityPackages200TextXMLString *string 
    StatusCode int64 
    
}

