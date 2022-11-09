import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
**/
export declare class RepositoryCatalogData extends SpeakeasyBase {
    aboutText?: string;
    architectures?: string[];
    description?: string;
    logoUrl?: string;
    marketplaceCertified?: boolean;
    operatingSystems?: string[];
    usageText?: string;
}
