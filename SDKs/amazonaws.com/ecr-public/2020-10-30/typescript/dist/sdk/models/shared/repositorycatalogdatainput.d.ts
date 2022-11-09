import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
export declare class RepositoryCatalogDataInput extends SpeakeasyBase {
    aboutText?: string;
    architectures?: string[];
    description?: string;
    logoImageBlob?: string;
    operatingSystems?: string[];
    usageText?: string;
}
