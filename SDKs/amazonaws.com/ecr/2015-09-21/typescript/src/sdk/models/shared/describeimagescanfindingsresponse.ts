import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanFindings } from "./imagescanfindings";
import { ImageScanStatus } from "./imagescanstatus";


export class DescribeImageScanFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;

  @Metadata({ data: "json, name=imageScanFindings" })
  imageScanFindings?: ImageScanFindings;

  @Metadata({ data: "json, name=imageScanStatus" })
  imageScanStatus?: ImageScanStatus;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
